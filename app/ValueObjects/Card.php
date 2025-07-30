<?php

namespace App\ValueObjects;

class Card
{
    public string $id;
    public string $number;
    public string $month;
    public string $year;
    public string $cvv;

    public function __construct(
        string $cardId,
        string $cardNumber,
        string $month,
        string $year,
        string $cvv
    ) {
        $this->id = $cardId;
        $this->number = $cardNumber;
        $this->month = $month;
        $this->year = $year;
        $this->cvv = $cvv;
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['id'],
            $data['number'],
            $data['month'],
            $data['year'],
            $data['cvv']
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'month' => $this->month,
            'year' => $this->year,
            'cvv' => $this->cvv,
        ];
    }
}
