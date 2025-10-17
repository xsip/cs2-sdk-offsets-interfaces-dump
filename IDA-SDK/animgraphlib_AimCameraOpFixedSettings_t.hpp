#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_AimCameraOpFixedSettings_t {
    int32_t m_nChainIndex;
    int32_t m_nCameraJointIndex;
    int32_t m_nPelvisJointIndex;
    int32_t m_nClavicleLeftJointIndex;
    int32_t m_nClavicleRightJointIndex;
    int32_t m_nDepenetrationJointIndex;
    char m_propJoints[0x18];
};
