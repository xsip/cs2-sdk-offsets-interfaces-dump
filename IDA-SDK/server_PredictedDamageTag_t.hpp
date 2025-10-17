#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTick_t.hpp"

class server_PredictedDamageTag_t {
    char vTable4137[0x30];
    entity2_GameTick_t nTagTick;
    float32 flFlinchModSmall;
    float32 flFlinchModLarge;
    float32 flFriendlyFireDamageReductionRatio;
};
