#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CTargetSelectorUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable236[0x8];
    animgraphlib_TargetSelectorAngleMode_t m_eAngleMode;
    char pad_237[0x4];
    char m_children[0x18];
    char pad_238[0x4];
    animgraphlib_CAnimParamHandle m_hTargetPosition;
    animgraphlib_CAnimParamHandle m_hTargetFacePositionParameter;
    animgraphlib_CAnimParamHandle m_hMoveHeadingParameter;
    animgraphlib_CAnimParamHandle m_hDesiredMoveHeadingParameter;
    bool m_bTargetPositionIsWorldSpace;
    bool m_bTargetFacePositionIsWorldSpace;
    bool m_bEnablePhaseMatching;
    char pad_239[0x1];
    float32 m_flPhaseMatchingMaxRootMotionSkip;
    char end_pad_240[0xc];
};
