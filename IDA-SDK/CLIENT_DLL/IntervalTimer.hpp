#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class IntervalTimer {
    char _vtable_pad_550[0x8];
    GameTime_t m_timestamp;
    WorldGroupId_t m_nWorldGroupId;
};
