#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_CGameScriptedMoveData {
    Vector m_vAccumulatedRootMotion;
    QAngle m_angAccumulatedRootMotionRotation;
    VectorWS m_vSrc;
    QAngle m_angSrc;
    QAngle m_angCurrent;
    float32 m_flLockedSpeed;
    float32 m_flAngRate;
    float32 m_flDuration;
    entity2_GameTime_t m_flStartTime;
    bool m_bActive;
    bool m_bTeleportOnEnd;
    bool m_bIgnoreRotation;
    bool m_bSuccess;
    client_ForcedCrouchState_t m_nForcedCrouchState;
    bool m_bIgnoreCollisions;
    char pad_2729[0x3];
    Vector m_vDest;
    QAngle m_angDst;
    char m_hDestEntity[0x4];
};
