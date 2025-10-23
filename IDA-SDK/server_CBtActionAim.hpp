#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"

class server_CBtActionAim {
    char pad_2721[0x58];
    char vTable3156[0x10];
    CUtlString m_szSensorInputKey;
    char pad_3157[0x10];
    CUtlString m_szAimReadyKey;
    float32 m_flZoomCooldownTimestamp;
    bool m_bDoneAiming;
    char pad_3158[0x3];
    float32 m_flLerpStartTime;
    float32 m_flNextLookTargetLerpTime;
    float32 m_flPenaltyReductionRatio;
    QAngle m_NextLookTarget;
    server_CountdownTimer m_AimTimer;
    server_CountdownTimer m_SniperHoldTimer;
    server_CountdownTimer m_FocusIntervalTimer;
    bool m_bAcquired;
    char end_pad_3159[0x7];
};
