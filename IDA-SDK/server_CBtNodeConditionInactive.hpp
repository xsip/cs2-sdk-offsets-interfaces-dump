#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"

class server_CBtNodeConditionInactive {
    char pad_2817[0x58];
    bool m_bNegated;
    char end_pad_3292[0x7];
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    float32 m_flRoundStartThresholdSeconds;
    float32 m_flSensorInactivityThresholdSeconds;
    server_CountdownTimer m_SensorInactivityTimer;
};
