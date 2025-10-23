#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventClientPollInput_t {
    client_EngineLoopState_t m_LoopState;
    float32 m_flRealTime;
    char end_pad_1619[0x4];
};
