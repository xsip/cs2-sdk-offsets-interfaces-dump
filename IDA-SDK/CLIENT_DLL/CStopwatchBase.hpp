#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class CStopwatchBase {
    GameTime_t m_flNext;
    WorldGroupId_t m_nWorldGroupId;
    bool m_fIsRunning;
    char end_pad_503[0x3];
};
