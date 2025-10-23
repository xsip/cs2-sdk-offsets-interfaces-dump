#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CBasePlayerController;

class server_CHintMessageQueue {
    float32 m_tmMessageEnd;
    char pad_2732[0x4];
    char m_messages[0x18];
    server_CBasePlayerController* m_pPlayerController;
};
