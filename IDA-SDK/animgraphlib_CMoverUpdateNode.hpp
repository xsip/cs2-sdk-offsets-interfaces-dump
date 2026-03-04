#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CMoverUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    void **__vftable_4;
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_AnimValueSource m_facingTarget;
    animgraphlib_CAnimParamHandle m_hMoveVecParam;
    animgraphlib_CAnimParamHandle m_hMoveHeadingParam;
    animgraphlib_CAnimParamHandle m_hTurnToFaceParam;
    char pad_193[0x2];
    float32 m_flTurnToFaceOffset;
    float32 m_flTurnToFaceLimit;
    bool m_bAdditive;
    bool m_bApplyMovement;
    bool m_bOrientMovement;
    bool m_bApplyRotation;
    bool m_bLimitOnly;
    char end_pad_194[0x7];
};
