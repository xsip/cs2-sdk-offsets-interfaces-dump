#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class CountdownTimer {
    char _vtable_pad_1044[0x8];
    float32 m_duration;
    GameTime_t m_timestamp;
    float32 m_timescale;
    WorldGroupId_t m_nWorldGroupId;
};
