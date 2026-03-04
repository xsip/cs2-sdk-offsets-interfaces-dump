#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CPlayerInputAnimMotorUpdater {
    void **__vftable_0;
    void **__vftable_1;
    CUtlString m_name;
    bool m_bDefault;
    char end_pad_37[0x7];
    char m_sampleTimes[0x18];
    char pad_208[0x4];
    float32 m_flSpringConstant;
    float32 m_flAnticipationDistance;
    animgraphlib_CAnimParamHandle m_hAnticipationPosParam;
    animgraphlib_CAnimParamHandle m_hAnticipationHeadingParam;
    bool m_bUseAcceleration;
    char end_pad_209[0x7];
};
