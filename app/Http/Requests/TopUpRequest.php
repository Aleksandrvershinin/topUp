<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TopUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'type' => ['required', Rule::in(['new', 'saved'])],
            'amount' => ['required', 'numeric', 'min:1'],
        ];

        if ($this->input('type') === 'saved') {
            $rules['cardId'] = ['required', 'string', 'uuid'];
        } elseif ($this->input('type') === 'new') {
            $rules = array_merge($rules, [
                'cardNumber' => ['required', 'digits:16'],
                'month' => ['required', 'regex:/^(0[1-9]|1[0-2])$/'],
                'year' => ['required', 'regex:/^\d{2}$/'],
                'cvv' => ['required', 'digits:3'],
                'saveCard' => ['nullable', 'boolean'],
            ]);
        }

        return $rules;
    }

    public function withValidator(Validator $validator)
    {
        $validator->after(function (Validator $validator) {
            if ($this->input('type') !== 'new') {
                return;
            }

            $month = $this->input('month');
            $year = $this->input('year');

            if (!$month || !$year) {
                return;
            }

            $expMonth = (int) $month;
            $expYear = (int) ('20' . $year);

            $now = now();
            $currentYear = (int) $now->format('Y');
            $currentMonth = (int) $now->format('m');

            $isExpired = $expYear < $currentYear || ($expYear === $currentYear && $expMonth < $currentMonth);

            if ($isExpired) {
                $validator->errors()->add('month', 'Срок действия карты истёк');
            }
        });
    }
}
