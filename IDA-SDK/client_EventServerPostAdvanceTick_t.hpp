#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventServerPostAdvanceTick_t {
    client_EngineLoopState_t m_LoopState;
    bool m_bFirstTick;
    bool m_bLastTick;
    char end_pad_2420[0x6];
    int32_t m_nCurrentTick;
    int32_t m_nCurrentTickThisFrame;
    int32_t m_nTotalTicksThisFrame;
    int32_t m_nTotalTicks;
    bool m_bLastTickBeforeClientUpdate;
    char end_pad_2432[0x7];
};
