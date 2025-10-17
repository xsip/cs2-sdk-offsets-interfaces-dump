#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventClientPauseSimulate_t {
    EngineLoopState_t m_LoopState;
    bool m_bFirstTick;
    bool m_bLastTick;
    char end_pad_1053[0x6];
};
