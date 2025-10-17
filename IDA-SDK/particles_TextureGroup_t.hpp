#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particles_TextureControls_t.hpp"

class particles_TextureGroup_t {
    bool m_bEnabled;
    bool m_bReplaceTextureWithGradient;
    char pad_2365[0x6];
    char m_hTexture[0x8];
    CColorGradient m_Gradient;
    particles_SpriteCardTextureType_t m_nTextureType;
    particles_SpriteCardTextureChannel_t m_nTextureChannels;
    particles_ParticleTextureLayerBlendType_t m_nTextureBlendMode;
    char pad_2366[0x4];
    particleslib_CParticleCollectionRendererFloatInput m_flTextureBlend;
    particles_TextureControls_t m_TextureControls;
};
