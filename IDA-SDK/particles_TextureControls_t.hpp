#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particleslib_CParticleCollectionRendererFloatInput.hpp"
#include "particleslib_CParticleCollectionRendererFloatInput.hpp"

class particles_TextureControls_t {
    particleslib_CParticleCollectionRendererFloatInput m_flFinalTextureScaleU;
    particleslib_CParticleCollectionRendererFloatInput m_flFinalTextureScaleV;
    particleslib_CParticleCollectionRendererFloatInput m_flFinalTextureOffsetU;
    particleslib_CParticleCollectionRendererFloatInput m_flFinalTextureOffsetV;
    particleslib_CParticleCollectionRendererFloatInput m_flFinalTextureUVRotation;
    particleslib_CParticleCollectionRendererFloatInput m_flZoomScale;
    particleslib_CParticleCollectionRendererFloatInput m_flDistortion;
    bool m_bRandomizeOffsets;
    bool m_bClampUVs;
    char pad_2367[0x2];
    particles_SpriteCardPerParticleScale_t m_nPerParticleBlend;
    particles_SpriteCardPerParticleScale_t m_nPerParticleScale;
    particles_SpriteCardPerParticleScale_t m_nPerParticleOffsetU;
    particles_SpriteCardPerParticleScale_t m_nPerParticleOffsetV;
    particles_SpriteCardPerParticleScale_t m_nPerParticleRotation;
    particles_SpriteCardPerParticleScale_t m_nPerParticleZoom;
    particles_SpriteCardPerParticleScale_t m_nPerParticleDistortion;
};
