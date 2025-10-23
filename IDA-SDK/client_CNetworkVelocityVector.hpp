#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CNetworkVelocityVector {
    char vTable1012[0x10];
    CNetworkedQuantizedFloat m_vecX;
    CNetworkedQuantizedFloat m_vecY;
    CNetworkedQuantizedFloat m_vecZ;
};
