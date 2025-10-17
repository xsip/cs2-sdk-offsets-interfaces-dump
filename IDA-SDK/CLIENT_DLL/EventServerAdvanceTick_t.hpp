#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventServerAdvanceTick_t {
    EngineLoopState_t m_LoopState;
    bool m_bFirstTick;
    bool m_bLastTick;
    char end_pad_1053[0x6];
    int32_t m_nCurrentTick;
    int32_t m_nCurrentTickThisFrame;
    int32_t m_nTotalTicksThisFrame;
    int32_t m_nTotalTicks;
};
