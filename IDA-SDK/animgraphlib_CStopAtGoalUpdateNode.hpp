#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_CStopAtGoalUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable292[0x4];
    float32 m_flOuterRadius;
    float32 m_flInnerRadius;
    float32 m_flMaxScale;
    float32 m_flMinScale;
    char pad_293[0x4];
    animgraphlib_CAnimInputDamping m_damping;
};
