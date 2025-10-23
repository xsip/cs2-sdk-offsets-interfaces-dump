#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CStopwatch {
    entity2_GameTime_t m_flNext;
    WorldGroupId_t m_nWorldGroupId;
    bool m_fIsRunning;
    char end_pad_1076[0x3];
    float32 m_flInterval;
};
