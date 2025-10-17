#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTick_t.hpp"

class PredictedDamageTag_t {
    char _vtable_pad_1077[0x30];
    GameTick_t nTagTick;
    float32 flFlinchModSmall;
    float32 flFlinchModLarge;
    float32 flFriendlyFireDamageReductionRatio;
};
