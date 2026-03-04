#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CDampedPathAnimMotorUpdater {
    void **__vftable_0;
    void **__vftable_1;
    CUtlString m_name;
    bool m_bDefault;
    char end_pad_37[0x7];
    bool m_bLockToPath;
    char end_pad_104[0x7];
    char __vftable_pad[4];
    float32 m_flAnticipationTime;
    float32 m_flMinSpeedScale;
    animgraphlib_CAnimParamHandle m_hAnticipationPosParam;
    animgraphlib_CAnimParamHandle m_hAnticipationHeadingParam;
    float32 m_flSpringConstant;
    float32 m_flMinSpringTension;
    float32 m_flMaxSpringTension;
    char end_pad_103[0x4];
};
