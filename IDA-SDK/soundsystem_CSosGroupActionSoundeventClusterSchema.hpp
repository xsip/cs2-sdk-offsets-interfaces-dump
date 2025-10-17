#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionSoundeventClusterSchema {
    char pad_545[0x8];
    int32_t m_nMinNearby;
    float32 m_flClusterEpsilon;
    CUtlString m_shouldPlayOpvar;
    CUtlString m_shouldPlayClusterChild;
    CUtlString m_clusterSizeOpvar;
    CUtlString m_groupBoundingBoxMinsOpvar;
    CUtlString m_groupBoundingBoxMaxsOpvar;
    char end_pad_549[0x18];
};
