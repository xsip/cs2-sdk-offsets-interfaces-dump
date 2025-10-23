#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CGameScriptedMoveDef_t {
    Vector m_vDestOffset;
    char m_hDestEntity[0x4];
    QAngle m_angDest;
    float32 m_flDuration;
    float32 m_flAngRate;
    float32 m_flMoveSpeed;
    bool m_bAimDisabled;
    bool m_bIgnoreRotation;
    char pad_2730[0x2];
    client_ForcedCrouchState_t m_nForcedCrouchState;
};
