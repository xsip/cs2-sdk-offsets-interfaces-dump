#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"

class server_CBtNodeConditionInactive {
    char pad_2721[0x58];
    bool m_bNegated;
    char end_pad_3167[0x7];
    char vTable3168[0x18];
    float32 m_flRoundStartThresholdSeconds;
    float32 m_flSensorInactivityThresholdSeconds;
    server_CountdownTimer m_SensorInactivityTimer;
};
