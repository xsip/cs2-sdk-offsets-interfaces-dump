#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CVectorExponentialMovingAverage.hpp"

class server_CMovementStatsProperty {
    void **__vftable_0;
    void **__vftable_1;
    int32_t m_nUseCounter;
    client_CVectorExponentialMovingAverage m_emaMovementDirection;
};
