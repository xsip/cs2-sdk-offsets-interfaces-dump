#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CTargetWarpUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable294[0x4];
    animgraphlib_TargetWarpAngleMode_t m_eAngleMode;
    animgraphlib_CAnimParamHandle m_hTargetPositionParameter;
    animgraphlib_CAnimParamHandle m_hTargetUpVectorParameter;
    animgraphlib_CAnimParamHandle m_hTargetFacePositionParameter;
    animgraphlib_CAnimParamHandle m_hMoveHeadingParameter;
    animgraphlib_CAnimParamHandle m_hDesiredMoveHeadingParameter;
    char pad_295[0x2];
    animgraphlib_TargetWarpCorrectionMethod m_eCorrectionMethod;
    animgraphlib_TargetWarpTimingMethod m_eTargetWarpTimingMethod;
    bool m_bTargetFacePositionIsWorldSpace;
    bool m_bTargetPositionIsWorldSpace;
    bool m_bOnlyWarpWhenTagIsFound;
    bool m_bWarpOrientationDuringTranslation;
    bool m_bWarpAroundCenter;
    char pad_296[0x3];
    float32 m_flMaxAngle;
};
