#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "client_CInButtonState.hpp"

class server_CCSObserver_MovementServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    int32_t m_nImpulse;
    char pad_3343[0x4];
    client_CInButtonState m_nButtons;
    uint64_t m_nQueuedButtonDownMask;
    uint64_t m_nQueuedButtonChangeMask;
    uint64_t m_nButtonDoublePressed;
    uint32_t m_pButtonPressedCmdNumber[64];
    uint32_t m_nLastCommandNumberProcessed;
    char pad_3344[0x4];
    uint64_t m_nToggleButtonDownMask;
    char pad_3345[0x8];
    float32 m_flMaxspeed;
    float32 m_arrForceSubtickMoveWhen[4];
    float32 m_flForwardMove;
    float32 m_flLeftMove;
    float32 m_flUpMove;
    Vector m_vecLastMovementImpulses;
    char pad_3346[0x5c];
    QAngle m_vecOldViewAngles;
    char end_pad_3347[0xc];
};
