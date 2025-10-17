#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventSimpleLoopFrameUpdate_t {
    client_EngineLoopState_t m_LoopState;
    float32 m_flRealTime;
    float32 m_flFrameTime;
};
