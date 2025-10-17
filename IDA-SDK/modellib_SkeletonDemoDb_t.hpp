#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_SkeletonDemoDb_t {
    char m_AnimCaptures[0x18];
    char m_CameraTrack[0x18];
    float32 m_flRecordingTime;
    char end_pad_395[0x4];
};
