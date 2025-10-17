#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class CSimTimer {
    GameTime_t m_flNext;
    WorldGroupId_t m_nWorldGroupId;
    float32 m_flInterval;
};
