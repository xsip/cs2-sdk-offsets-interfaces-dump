#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"
#include "server_CountdownTimer.hpp"
#include "server_CountdownTimer.hpp"

class server_CBtActionAim {
    char pad_2818[0x58];
    void **__vftable_0;
    void **__vftable_1;
    CUtlString m_szSensorInputKey;
    char pad_3283[0x10];
    CUtlString m_szAimReadyKey;
    float32 m_flZoomCooldownTimestamp;
    bool m_bDoneAiming;
    char pad_3284[0x3];
    float32 m_flLerpStartTime;
    float32 m_flNextLookTargetLerpTime;
    float32 m_flPenaltyReductionRatio;
    QAngle m_NextLookTarget;
    server_CountdownTimer m_AimTimer;
    server_CountdownTimer m_SniperHoldTimer;
    server_CountdownTimer m_FocusIntervalTimer;
    bool m_bAcquired;
    char end_pad_3285[0x7];
};
