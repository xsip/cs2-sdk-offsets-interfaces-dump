#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_CStopAtGoalUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char __vftable_pad[4];
    float32 m_flOuterRadius;
    float32 m_flInnerRadius;
    float32 m_flMaxScale;
    float32 m_flMinScale;
    char pad_246[0x4];
    animgraphlib_CAnimInputDamping m_damping;
};
