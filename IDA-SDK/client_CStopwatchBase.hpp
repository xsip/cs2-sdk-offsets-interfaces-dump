#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CStopwatchBase {
    entity2_GameTime_t m_flNext;
    WorldGroupId_t m_nWorldGroupId;
    bool m_fIsRunning;
    char end_pad_1065[0x3];
};
