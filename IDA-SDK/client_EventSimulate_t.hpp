#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventSimulate_t {
    client_EngineLoopState_t m_LoopState;
    bool m_bFirstTick;
    bool m_bLastTick;
    char end_pad_1615[0x6];
};
