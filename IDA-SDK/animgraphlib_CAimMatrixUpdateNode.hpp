#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_AimMatrixOpFixedSettings_t.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animationsystem_HSequence.hpp"

class animgraphlib_CAimMatrixUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    animgraphlib_AimMatrixOpFixedSettings_t m_opFixedSettings;
    char pad_21[0x8];
    animgraphlib_AnimVectorSource m_target;
    animgraphlib_CAnimParamHandle m_paramIndex;
    char pad_22[0x2];
    animationsystem_HSequence m_hSequence;
    bool m_bResetChild;
    bool m_bLockWhenWaning;
    char end_pad_23[0xa];
};
