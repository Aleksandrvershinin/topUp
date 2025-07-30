<?php

namespace App\Services;

use App\ValueObjects\Card;

class PaymentGateway
{
    public function charge(float $amount, Card $card): bool
    {
        sleep(1);

        return true;
    }
}
