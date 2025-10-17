#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CVectorExponentialMovingAverage.hpp"

class server_CMovementStatsProperty {
    char vTable2915[0x10];
    int32_t m_nUseCounter;
    client_CVectorExponentialMovingAverage m_emaMovementDirection;
};
