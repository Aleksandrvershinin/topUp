<?php

namespace App\Services;

use App\DTO\TopUpData;
use App\Services\PaymentGateway;
use App\Services\CardRepository;
use RuntimeException;

class TopUpService
{
    protected PaymentGateway $gateway;
    protected CardRepository $repo;

    public function __construct(PaymentGateway $gateway, CardRepository $repo)
    {
        $this->gateway = $gateway;
        $this->repo = $repo;
    }

    public function handle(TopUpData $data): bool
    {
        if ($data->hasSavedCard()) {
            if (!$data->cardId) {
                throw new RuntimeException('Карта не найдена');
            }
            $card = $this->repo->find($data->cardId);

            if (!$card) {
                throw new RuntimeException('Карта не найдена');
            }
        } else {
            $card = $data->createCard();

            if ($data->saveCard) {
                $this->repo->save($card);
            }
        }

        return $this->gateway->charge($data->amount, $card);
    }
}
