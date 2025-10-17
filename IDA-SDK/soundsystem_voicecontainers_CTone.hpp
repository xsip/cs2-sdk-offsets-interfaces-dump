#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CTone {
    char m_harmonics[0x18];
    CPiecewiseCurve m_curve;
    bool m_bSyncInstances;
    char end_pad_498[0x7];
};
