#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTick_t.hpp"

class client_PredictedDamageTag_t {
    char vTable1639[0x30];
    entity2_GameTick_t nTagTick;
    float32 flFlinchModSmall;
    float32 flFlinchModLarge;
    float32 flFriendlyFireDamageReductionRatio;
};
