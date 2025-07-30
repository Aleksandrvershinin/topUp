<?php

namespace App\Http\Controllers;

use App\Http\Resources\CardResource;
use App\Services\CardRepository;

class CardController extends Controller
{
    public function index(CardRepository $repository)
    {
        $cards = CardResource::collection($repository->all());
        return response()->json($cards);
    }
}
