#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventClientFrameSimulate_t {
    client_EngineLoopState_t m_LoopState;
    float32 m_flRealTime;
    float32 m_flFrameTime;
    bool m_bScheduleSendTickPacket;
    char end_pad_1617[0x7];
};
