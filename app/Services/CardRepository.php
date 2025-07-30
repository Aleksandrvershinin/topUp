<?php

namespace App\Services;

use App\ValueObjects\Card;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

class CardRepository
{
    protected string $path = 'cards.json';

    public function all(): Collection
    {
        $json = Storage::exists($this->path) ? Storage::get($this->path) : '[]';
        $raw = json_decode($json, true);

        return collect($raw)->map(fn($c) => Card::fromArray($c));
    }

    public function find(string $id): ?Card
    {
        return $this->all()->firstWhere('id', $id);
    }

    public function save(Card $card): void
    {
        $cards = $this->all()->push($card);
        $serialized = $cards->map(fn($c) => $c->toArray())->toArray();

        Storage::put($this->path, json_encode($serialized, JSON_PRETTY_PRINT));
    }
}
