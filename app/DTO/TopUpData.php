<?php

namespace App\DTO;

use App\ValueObjects\Card;
use Illuminate\Support\Str;

class TopUpData
{
    public float $amount;
    public string $type;
    public ?string $cardId;
    public ?string $cardNumber;
    public ?string $month;
    public ?string $year;
    public ?string $cvv;
    public bool $saveCard;

    public function __construct(array $data)
    {
        $this->type = $data['type'];
        $this->amount = (float) $data['amount'];
        $this->cardId = $data['cardId'] ?? null;
        $this->cardNumber = $data['cardNumber'] ?? null;
        $this->month = $data['month'] ?? null;
        $this->year = $data['year'] ?? null;
        $this->cvv = $data['cvv'] ?? null;
        $this->saveCard = (bool) ($data['saveCard'] ?? false);
    }

    public function hasSavedCard(): bool
    {
        return $this->type === 'saved';
    }

    public function createCard(): Card
    {
        return new Card(
            (string) Str::uuid(),
            $this->cardNumber,
            $this->month,
            $this->year,
            $this->cvv
        );
    }
}
