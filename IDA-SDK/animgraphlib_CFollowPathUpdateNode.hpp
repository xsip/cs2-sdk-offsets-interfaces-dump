#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CFollowPathUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable123[0x4];
    float32 m_flBlendOutTime;
    bool m_bBlockNonPathMovement;
    bool m_bStopFeetAtGoal;
    bool m_bScaleSpeed;
    char pad_124[0x1];
    float32 m_flScale;
    float32 m_flMinAngle;
    float32 m_flMaxAngle;
    float32 m_flSpeedScaleBlending;
    char pad_125[0x4];
    animgraphlib_CAnimInputDamping m_turnDamping;
    animgraphlib_AnimValueSource m_facingTarget;
    animgraphlib_CAnimParamHandle m_hParam;
    char pad_126[0x2];
    float32 m_flTurnToFaceOffset;
    bool m_bTurnToFace;
    char end_pad_127[0x3];
};
