#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CTargetSelectorUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    void **__vftable_3;
    animgraphlib_TargetSelectorAngleMode_t m_eAngleMode;
    char pad_250[0x4];
    char m_children[0x18];
    char pad_251[0x4];
    animgraphlib_CAnimParamHandle m_hTargetPosition;
    animgraphlib_CAnimParamHandle m_hTargetFacePositionParameter;
    animgraphlib_CAnimParamHandle m_hMoveHeadingParameter;
    animgraphlib_CAnimParamHandle m_hDesiredMoveHeadingParameter;
    bool m_bTargetPositionIsWorldSpace;
    bool m_bTargetFacePositionIsWorldSpace;
    bool m_bEnablePhaseMatching;
    char pad_252[0x1];
    float32 m_flPhaseMatchingMaxRootMotionSkip;
    char end_pad_253[0xc];
};
