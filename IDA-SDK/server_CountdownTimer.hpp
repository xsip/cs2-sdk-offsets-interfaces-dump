#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_CountdownTimer {
    char vTable4124[0x8];
    float32 m_duration;
    entity2_GameTime_t m_timestamp;
    float32 m_timescale;
    WorldGroupId_t m_nWorldGroupId;
};
