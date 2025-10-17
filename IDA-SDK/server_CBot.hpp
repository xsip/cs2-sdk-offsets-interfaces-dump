#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CCSPlayerController;
class server_CCSPlayerPawn;

class server_CBot {
    char vTable3017[0x10];
    server_CCSPlayerController* m_pController;
    server_CCSPlayerPawn* m_pPlayer;
    bool m_bHasSpawned;
    char pad_3018[0x3];
    uint32_t m_id;
    char pad_3019[0x98];
    bool m_isRunning;
    bool m_isCrouching;
    char pad_3020[0x2];
    float32 m_forwardSpeed;
    float32 m_leftSpeed;
    float32 m_verticalSpeed;
    uint64_t m_buttonFlags;
    float32 m_jumpTimestamp;
    Vector m_viewForward;
    char pad_3021[0x10];
    int32_t m_postureStackIndex;
    char end_pad_3022[0x4];
};
