#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventServerPostSimulate_t {
    client_EngineLoopState_t m_LoopState;
    bool m_bFirstTick;
    bool m_bLastTick;
    char end_pad_2420[0x6];
    bool m_bLastTickBeforeClientUpdate;
    char end_pad_2433[0x7];
};
