#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"
#include "CInButtonState.hpp"

class CCSObserver_MovementServices {
    char _vtable_pad_635[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char pad_636[0x10];
    int32_t m_nImpulse;
    char pad_255[0x4];
    CInButtonState m_nButtons;
    uint64_t m_nQueuedButtonDownMask;
    uint64_t m_nQueuedButtonChangeMask;
    uint64_t m_nButtonDoublePressed;
    uint32_t m_pButtonPressedCmdNumber[64];
    uint32_t m_nLastCommandNumberProcessed;
    char pad_256[0x4];
    uint64_t m_nToggleButtonDownMask;
    char pad_257[0x8];
    float32 m_flMaxspeed;
    float32 m_arrForceSubtickMoveWhen[4];
    float32 m_flForwardMove;
    float32 m_flLeftMove;
    float32 m_flUpMove;
    Vector m_vecLastMovementImpulses;
    char pad_258[0x5c];
    QAngle m_vecOldViewAngles;
    char end_pad_259[0xc];
};
