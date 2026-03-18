#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTick_t.hpp"
#include "entity2_GameTick_t.hpp"
#include "entity2_GameTick_t.hpp"

class client_CCSPlayerModernJump {
    void **__vftable_0;
    void **__vftable_1;
    entity2_GameTick_t m_nLastActualJumpPressTick;
    float32 m_flLastActualJumpPressFrac;
    entity2_GameTick_t m_nLastUsableJumpPressTick;
    float32 m_flLastUsableJumpPressFrac;
    entity2_GameTick_t m_nLastLandedTick;
    float32 m_flLastLandedFrac;
    float32 m_flLastLandedVelocityX;
    float32 m_flLastLandedVelocityY;
    float32 m_flLastLandedVelocityZ;
    char pad_1673[0x4];
};
